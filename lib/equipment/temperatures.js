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

module.exports = function(container) {
    logger = container.logger
    if (container.logModuleLoading)
        logger.info('Loading: temperatures.js')

    var temperatures = {
        "poolTemp": 0,
        "spaTemp": 0,
        "airTemp": 0,
        "solarTemp": 0
    }


    function setTempFromController(poolTemp, spaTemp, airTemp, solarTemp) {
        temperatures.poolTemp = poolTemp
        temperatures.spaTemp = spaTemp
        temperatures.airTemp = airTemp
        temperatures.solarTemp = solarTemp
        container.io.emitToClients('temp')
    }

    function getTemperatures(){
      return temperatures
    }

    if (container.logModuleLoading)
        logger.info('Loaded: temperatures.js')


    return {
        temperatures,
        setTempFromController: setTempFromController,
        getTemperatures : getTemperatures
    }
}
