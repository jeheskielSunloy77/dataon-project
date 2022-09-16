import { AppContext, AppProvider } from './AppContext'
import customAxios from './axios'
import { jwtSecret, trainingDataShape } from './constants'
import getUser from './getUser'
import i18n from './i18n'
import {
	mockData1,
	mockData2,
	transferMockData,
	transferMockKeys,
	userDB,
} from './mockData'
import parsePeriod from './parsePeriod'
import queryPrams from './queryParams'
import { matchMediaConfig, setupAdmin, setupUser } from './testUtils'

export {
	AppContext,
	AppProvider,
	parsePeriod,
	queryPrams,
	customAxios,
	matchMediaConfig,
	i18n,
	getUser,
	setupAdmin,
	setupUser,
	trainingDataShape,
	mockData1,
	mockData2,
	transferMockData,
	transferMockKeys,
	userDB,
	jwtSecret,
}
