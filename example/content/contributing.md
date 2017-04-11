---
title: "Contributing"
menu: 
    main:
        weight: 20
---
# Contributing

First off, thanks for taking the time to contribute!

# How to contribute

## Reporting Bugs

Bugs are tracked as [Gitlab issues](https://gitlab.com/itk.fr/lorhammer/issues). Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.

Explain the problem and include additional details to help maintainers reproduce the problem:

* Look at existing issues, if you found same issue don't hesitate to :+1: and to add new details if available.
* Use a clear and descriptive title for the issue to identify the problem.
* Details your environment (windows, linux, mac...)
* Add the command line and/or the scenario file to reproduce the problem
* You can delete some private address or deployment strategy but tell use what is your network server type
* Explain which behavior you expected to see instead and why.

## Code contribution

Merge-request (or pull-request) are made at [Gitlab merge-request](https://gitlab.com/itk.fr/lorhammer/merge_requests).

Before starting to implement new feature, please, open an issue to discuss about the impacts and the design.

The continuous-integration will check :

* The code is formatted : `gofmt -w -d ./src` or `resources/scripts/gofmt.sh` to format
* All tests are green, please add unit tests with your code : `go test -race $(go list ./src/...)` to run them
* Integrations tests are also ok : launch some instances with scenarios located at `resources/scenarios/ci` to check performance regressions

Obviously, a merge-request will be accepted only if pipeline is green.

## Other

If you have any question, please make an issue, we will answer as soon as possible.
