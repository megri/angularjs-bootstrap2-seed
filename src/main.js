'use strict'

import angular from 'angular'
import 'angular-sanitize'

import 'ui-select/dist/select.js'
import 'ui-select/dist/select.css'

import 'angular-ui-bootstrap/ui-bootstrap-tpls.js'
import 'bootstrap-2.3.2/css/bootstrap.css'
import 'angular-ui-bootstrap/ui-bootstrap-csp.css'

const app = angular.module('app', [
  'ui.bootstrap',
  'ui.select',
  'ngSanitize'])

export default app
