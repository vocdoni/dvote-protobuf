# Developing

## Introduce changes in dvote-protobuf

Do whatever changes you need to do in the `src/**/*.proto` files, and commit them.

For example:

```sh
git clone git@github.com:vocdoni/dvote-protobuf.git && cd dvote-protobuf
git checkout -b feat-add-DummyMessage # don't use slashes (/)
cat >> src/vochain/vochain.proto << EOF
message DummyMessage {
        bytes payload = 1;
}
EOF
git commit . -m "add DummyMessage"
git push --set-upstream origin feat-add-DummyMessage
```

if you use slashes in the branch name (say, `example/branch-name`), you won't be able to `go get go.vocdoni.io/proto@example/branch-name` in the next step due to https://github.com/golang/go/issues/32955

You don't need to `make all`, just open a PR (see next step) and a github action will do the `make all` for you and autocommit the changes in your PR branch.

## Stage them in a PR of dvote-protobuf

Now create a PR:

https://github.com/vocdoni/dvote-protobuf/pull/new/feat-add-DummyMessage

and wait a minute for the CI to run, it will auto commit the build changes
("auto build commit" is pushed to the PR automatically)

Don't merge the PR, leave it "staged" (open) because you might want to introduce more changes while developing the other components.

## Use that "staged" dvote-protobuf in vocdoni-node

```sh
git clone git@github.com:vocdoni/vocdoni-node.git && cd vocdoni-node
git checkout -b wonderful-feature # here it doesn't matter if you use slashes (/)
go get go.vocdoni.io/proto@feat-add-DummyMessage # this will pull the code from your PR
go mod tidy
git add go.mod go.sum
git commit -m "bump go.vocdoni.io/proto@feat-add-DummyMessage"
git push --set-upstream origin wonderful-feature
```

Now if you create a PR in vocdoni-node with your `wonderful-feature` branch, you'll see the CI of vocdoni-node pulls the dvote-protobuf from `feat-add-DummyMessage`

## Use that "staged" dvote-protobuf in vocdoni-sdk

```sh
git clone git@github.com:vocdoni/vocdoni-sdk.git && cd vocdoni-sdk
git checkout -b wonderful-feature # here it doesn't matter if you use slashes (/)
# edit package.json, so that @vocdoni/proto is pulled from github repo
# "@vocdoni/proto": "vocdoni/dvote-protobuf#feat-add-DummyMessage"
git add package.json
git commit -m "pull @vocdoni/proto from branch feat-add-DummyMessage"
git push --set-upstream origin wonderful-feature
```

Now if you create a PR in vocdoni-sdk with your `wonderful-feature` branch, you'll see the CI of vocdoni-sdk pulls the dvote-protobuf from `feat-add-DummyMessage`

# Merging

When the feature is ready to be merged in all 3 repos (dvote-protobuf, vocdoni-node and vocdoni-sdk), you will:

* First, merge the PR in dvote-protobuf, bump the version  (say, `1.2.3`) and publish a release (see next step)
* Then, in vocdoni-node: `go get go.vocdoni.io/proto@v1.2.3` and `go mod tidy`, commit those changes and squash them in the `wonderful-feature` PR, before merging.
* Then, in vocdoni-sdk, edit `package.json` to point to the release `"@vocdoni/proto": "1.2.3"`, commit those changes an squash them in the `wonderful-feature` PR, before merging.

# Release

For publishing a new release, a github action has been created in
order to minimize the work. Just follow these steps:

- Checkout `master` branch: `git checkout master`
- Update the version (say, `1.2.3`) in the `package.json` file
- Commit the changes: `git commit package.json -m "@vocdoni/proto 1.2.3"`
- Tag the commit: `git tag v1.2.3`
- Push the ref and the tag: `git push origin master v1.2.3`
- Create a new github release: https://github.com/vocdoni/dvote-protobuf/releases/new?tag=v1.2.3

As soon as the github release is done, the github action will take care of the rest automatically: build the npm package and publish it on https://www.npmjs.com/package/@vocdoni/proto

TODO(gui): automate the release creation step, using the github action, triggered by the push of a tag