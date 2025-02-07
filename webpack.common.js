/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2020, United States Government
 * as represented by the Administrator of the National Aeronautics and Space
 * Administration. All rights reserved.
 *
 * Open MCT is licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * Open MCT includes source code licensed under additional open source
 * licenses. See the Open Source Licenses file (LICENSES.md) included with
 * this source code distribution or the Licensing information page available
 * at runtime from the About dialog for additional information.
 *****************************************************************************/

const path = require('path');

// eslint-disable no-undef
const WEBPACK_COMMON_CONFIG = {
    performance: {
        hints: false
    },
    resolve: {
        alias: {
            saveAs: "file-saver/src/FileSaver.js",
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: "pre",
                use: ["source-map-loader"]
            }
        ]
    },
    output: {
        globalObject: "this",
        filename: '[name].js',
        // eslint-disable-next-line no-undef
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'openmctYamcs'
    }
};

// eslint-disable-next-line no-undef
module.exports = WEBPACK_COMMON_CONFIG;
