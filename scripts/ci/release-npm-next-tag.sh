#! /bin/bash

CHANGED_PACKAGES=$(git diff-tree --no-commit-id --name-only -r -m  ${TRAVIS_COMMIT} | \
    grep -e "^packages/" | \
    grep -v -e "packages/docs")

echo $CHANGED_PACKAGES

if [ -z "${CHANGED_PACKAGES}" ]
then
    echo "No npm relevant packages changed - skip npm release"
    exit 0
fi

if [ "${TRAVIS_PULL_REQUEST}" != "false" ]
then
    echo "This is a pull request build - skip npm release"
    exit 0
fi

cd ${TRAVIS_BUILD_DIR}/build/node_modules/charts && npm publish --access public --tag next
cd ${TRAVIS_BUILD_DIR}/build/node_modules/fiori3 && npm publish --access public --tag next
cd ${TRAVIS_BUILD_DIR}/build/node_modules/styles && npm publish --access public --tag next
cd ${TRAVIS_BUILD_DIR}/build/node_modules/utils && npm publish --access public --tag next
