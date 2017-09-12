import { given } from '../../step_definitions/register';
import openUrl from '../actions/openUrl'
import clickElement from '../actions/clickElement'

given('I am on a site {string}', openUrl);
given('I click on {string}', clickElement);