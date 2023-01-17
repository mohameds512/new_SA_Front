import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import app from './app'
import appConfig from './app-config'
import verticalMenu from './vertical-menu'

// users
import usersModule from './modules/user_settings/users/user'
// users
import addProjectModule from './modules/ecb_forms/add_project'

import addSubmissionModule from './modules/pgc_forms/add_submission'

// system
import roleModule from './modules/user_settings/roles/role'
import logModule from './modules/administration/logs/log'

import dashboardModule from './modules/system/dashboard'
import lookupsModule from './modules/system/lookups'
import AirCraftModule from './modules/air_craft/aircraft'
import AirPortModule from './modules/airport/airport'
import EngineTypeModule from './modules/lookups/engine_type'
import settingModule from './modules/administration/management/settings'

import OperatorsModule from './modules/lookups/operators'
import Delay_CodesModule from './modules/lookups/delay_codes'
import FleetTypeModule from './modules/lookups/fleet_type'
import ManufacturersModule from './modules/lookups/manufacturers'

import FlightsModule from './modules/flights/flights'
import CountriesModule from './modules/lookups/countries'



Vue.use(Vuex)
import EnginePhysicalClassModule from './modules/lookups/engine_physical_class'
import AircraftStatusModule from './modules/lookups/aircraft_status'
import ManufacturerTypesModule from './modules/lookups/manufacturer_types'

export default new Vuex.Store({
    modules: {
        app,
        appConfig,
        verticalMenu,
        users: usersModule,
        ecb_forms: addProjectModule,
        roles: roleModule,
        pgc_forms:addSubmissionModule,
        log: logModule,
        settings: settingModule,
        dashboard: dashboardModule,
        aircraft: AirCraftModule,
        lookups: lookupsModule,
        airport: AirPortModule,
        engine_type:EngineTypeModule,

        flights:FlightsModule,
        engine_physical_class:EnginePhysicalClassModule,
        aircraft_status:AircraftStatusModule,
        manufacturer_types:ManufacturerTypesModule,

        operators: OperatorsModule,
        delay_codes : Delay_CodesModule,
        fleet_type: FleetTypeModule,
        manufacturers: ManufacturersModule,
        countries: CountriesModule,
        flights: FlightsModule


    },
})
