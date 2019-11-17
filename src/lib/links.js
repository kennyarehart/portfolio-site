export const getCaseStudyLink = name => {
	return {
		pathname: '/casestudy',
		state: {
			name
		}
	}
}

export const getHome = () => '/'
