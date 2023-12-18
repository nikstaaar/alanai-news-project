import React, { useState, useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'

import NewsCards from './components/NewsCards/NewsCards'
import useStyles from './styles.js'

const alanKey =
	'2274e5d6934e6a48bee60b6e94f584fd2e956eca572e1d8b807a3e2338fdd0dc/stage'

const App = () => {
	const [newsArticles, setNewsArticles] = useState([])
	const [activeArticle, setActiveArticle] = useState(-1)
	const classes = useStyles()
	useEffect(() => {
		alanBtn({
			key: alanKey,
			onCommand: ({ command, articles }) => {
				if (command === 'newHeadlines') {
					setNewsArticles(articles)
				} else if (command === 'highlight') {
					setActiveArticle((prevActiveArticle) => prevActiveArticle + 1)
				}
			},
		})
	}, [])

	return (
		<div>
			<div className={classes.logoContainer}>
				{' '}
				<img src="/alan.jpg" className={classes.alanLogo} alt="logo" />
			</div>
			<NewsCards articles={newsArticles} activeArticle={activeArticle}></NewsCards>
		</div>
	)
}

export default App
