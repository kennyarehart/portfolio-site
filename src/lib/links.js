export const getCaseStudyLink = name => {
	return {
		pathname: `/casestudy/${name}`,
		state: {
			name
		}
	}
}

export const getHome = () => '/'
