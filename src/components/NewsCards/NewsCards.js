import React from 'react'
import { Grid, Grow, Typography } from '@mui/material'

import NewsCard from '../NewsCard/NewsCard.js'
import useStyles from './styles.js'

const infoCards = [
	{
		color: '#4cc9f0',
		title: 'Latest News',
		text: 'Give me the latest news, please',
	},
	{
		color: '#4361ee',
		title: 'News by Categories',
		info: 'Business, Entertainment, Health, Science, Sports, Technology',
		text: 'Give me the latest Technology news',
	},
	{
		color: '#3a0ca3',
		title: 'News by Terms',
		info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...',
		text: "What's up with PlayStation 5",
	},
	{
		color: '#7209b7',
		title: 'News by Sources',
		info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...',
		text: 'Give me the news from CNN',
	},
]

const NewsCards = ({ articles, activeArticle }) => {
	const classes = useStyles()

	if (!articles.length) {
		return (
			<Grow in>
				<Grid
					className={classes.container}
					container
					alignItems="stretch"
					spacing={3}
				>
					{infoCards.map((infoCard) => (
						<Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoContainer}>
							<div
								className={classes.infoCard}
								style={{ borderColor: infoCard.color }}
							>
								<Typography style={{ color: infoCard.color }} variant="h5">
									{infoCard.title}
								</Typography>
								{infoCard.info ? (
									<Typography variant="h6">
										<strong>{infoCard.title.split(' ')[2]}:</strong>
										<p>{infoCard.info}</p>
									</Typography>
								) : null}
								<Typography variant="h6">
									Try saying:
									<br /> <i>{infoCard.text}</i>
								</Typography>
							</div>
						</Grid>
					))}
				</Grid>
			</Grow>
		)
	}

	return (
		<Grow in>
			<Grid
				className={classes.container}
				container
				alignItems="stretch"
				spacing={3}
			>
				{articles.map((article, i) => (
					<Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
						<NewsCard article={article} activeArticle={activeArticle} i={i} />
					</Grid>
				))}
			</Grid>
		</Grow>
	)
}

export default NewsCards
