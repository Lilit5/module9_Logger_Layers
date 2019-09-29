Magento testing tool

Magento is an open-source e-commerce platform written in PHP. This tool is designed to test Magento basic functionality.

Getting Started
* Clone this repository 
* npm install to install all required dependencies


Run Tests
To run tests:
1. run selenium server in hub mode ./ hub_3.14.0-json.bat
2. run node(s) ./ se-node_1-3.14.0 � json.bat (run also ./se-node_2-3.14.0 � json.bat in case you need 2 nodes)
3. run npm run test command

Changes added to the project according to the module 8 home task

1. Added Logging mechanism. Using winston logging library.
2. Refactored test structure. Converted to detailed layered structure.
