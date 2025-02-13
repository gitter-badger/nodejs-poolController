/*  nodejs-poolController.  An application to control pool equipment.
 *  Copyright (C) 2016, 2017.  Russell Goldin, tagyoureit.  russ.goldin@gmail.com
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Affero General Public License as
 *  published by the Free Software Foundation, either version 3 of the
 *  License, or (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Affero General Public License for more details.
 *
 *  You should have received a copy of the GNU Affero General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

//Set Circuit Function On/Off
module.exports = function(container) {

    if (container.logModuleLoading)
        container.logger.info('Loading: 134.js')


function process(data, counter) {
            container.circuit.requestUpdateCircuit(data[container.constants.packetFields.FROM], data[container.constants.packetFields.DEST], data[6], data[7], counter)
            decoded = true;


            return decoded
        }


    if (container.logModuleLoading)
        container.logger.info('Loaded: 134.js')


    return {
        process: process
    }
}
