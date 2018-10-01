# How to publish T7 packages

This guide presupposes that Node is installed locally, and that you have a basic working knowledge of NPM. If you don't yet have an NPM account, go here and create one.

[https://www.npmjs.com/signup](https://www.npmjs.com/signup)

We also strongly recommended that you enable two-factor authentication (2FA). That way nobody else can publish using your credentials, without an extra authentication step.

[https://docs.npmjs.com/getting-started/using-two-factor-authentication](https://docs.npmjs.com/getting-started/using-two-factor-authentication)

---

## Step 1: Permissions

Ensure that you have an NPM account and are a member of the T7 organization.

Go to the command line, and type this…

```sh
# List T7 developers.
npm team ls t7:developers
```

You should see your username listed in the array that is returned.

```sh
# Example:
[
  "johnrjenson",
  "mundizzle",
  # YOUR_NAME_HERE
]
```

If you do not see your username listed, then contact an admin of the T7 organization. Speak to either John Jenson or Mundi Morgado, and they should be able to add you to the developers list.

---

## Step 2: Add user

Assuming you have an NPM account, you should be logged in locally. If you are unsure, type this in the command line.

```sh
npm login
```

You will then be prompted to enter username, password, and email address. Upon successful login from the command line, you should see a confirmation message.

```sh
# "YOUR_NAME_HERE" = Your username.
Logged in as YOUR_NAME_HERE on https://registry.npmjs.org/
```

You will only need to do this once per machine, after which your user credentials are cached. However, you will need to enter the 2FA token each time you publish. This token can be dynamically generated via an app on your phone, such as [Google Authenticator](https://en.wikipedia.org/wiki/Google_Authenticator).

---

## Step 3: Running tests

To ensure that our code is of a certain quality, we use Jest for unit testing.

[https://jestjs.io/](https://jestjs.io/)

To run tests, type this.

```sh
npm run test
```

To run tests with coverage, type this.

```sh
npm run test_with_coverage
```

When creating tests, we recommend a `file_name.test.js` naming convention, where `file_name.js` would be the name of the file to be tested.

To see examples of how Jest tests are typically set up, refer to the following files within this repo:

- `button_minus.test.js`
- `button_plus.test.js`

Ideally, we are shooting for 100% test coverage. For simple components, this should be easily achieveable. This is especially important when releasing components publicly on NPM for reuse, as it helps would-be users have confidence in our code.

In some edge cases, such as `input[type="file"]`, there are certain things that (currently) are not able to be simulated. For instance, browsing a local file system on a user's computer cannot be adequately mocked in a test environment.

In general though, unless you are encountering limitations with Jest itself, you should always strive to test as much of your code as possible. You should probably have at least 90% test coverage in code you are making available for others.

---

## Step 4: Build and transpile

Once you are ready to publish, be sure to do a build and commit it beforehand. This will cause [GitHub Pages](https://pages.github.com/) to pick up on the changes, and make them viewable in a web browser. Once you have done a `cd` into the project directory, type this in the command line.

```sh
# Runs Webpack build, and ESLint transpile.
npm run build
```

Once the changes have been recognized, you should see them reflected at a URL such as this, where `"npm-example"` is the name of your repo.

[https://t7-components.github.io/npm-example/build/](https://t7-components.github.io/npm-example/build/)

Likewise, running a build also causes all existing unit tests to be run beforehand, and test coverage is generated as a result. It will also deployed via the same commit.

[https://t7-components.github.io/npm-example/coverage/lcov-report/](https://t7-components.github.io/npm-example/coverage/lcov-report/)

If you don't see your demo build or coverage at all, that means the repo has not configured to publish anything. Read this [GitHub article](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/) on how to enable a publishing source. Choose the `master` branch for ease of use.


---

## Step 5: Publishing to NPM

If you are creating a project from scratch, you will need a bare minimum `package.json` file. For an example project structure, refer to this repo.

If you would like to practice incrementing the package version and publishing to NPM, feel free to use this `"npm-example"` repo. It exists to serve as a test area for T7 publishing.

```json
{
  "name": "@t7/npm-example",
  "version": "0.0.0"
}
```

When publishing a package for the first time, you will need to specify that it is public. For safety, the default is `"private"` but everything we publish under the `"@t7/…"` banner is public. Run this command.

```sh
# First publish
npm publish --access public
```

When making updates to an existing package, you will need to increment the version. This is because NPM will not let you overwrite a version once it has been published. Usually this will be a minor `"patch"`.

```sh
# Patch update: "0.0.0" to "0.0.1"
npm version patch && npm publish
```

Occasionally, you may have need to do a `"minor"` update or (less frequently) a `"major"` update. To do that, use one of the commands below.

```sh
# Minor update: "0.0.0" to "0.1.0"
npm version minor && npm publish
```

```sh
# Major update: "0.0.0" to "1.0.0"
npm version major && npm publish
```

It is worth noting incrementing minor and major versions should probably be discussed with the larger team, especially if it pertains to a T7 NPM package with multiple consumers. That is, if people are relying on the projects and changes would potentially adversely affect them.

In such cases, it would be helpful to write up a migration guide and/or mark certain parts of a package as deprecated, to make developers aware of planned future changes.

Read more about semantic versioning here.

[https://semver.org/](https://semver.org/)

[https://semver.npmjs.com/](https://semver.npmjs.com/)

[https://docs.npmjs.com/cli/version](https://docs.npmjs.com/cli/version)

[https://docs.npmjs.com/getting-started/semantic-versioning](https://docs.npmjs.com/getting-started/semantic-versioning)
