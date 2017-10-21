import React, { Component } from 'react';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Footer from 'grommet/components/Footer';
import Heading from 'grommet/components/Heading';
import Hero from 'grommet/components/Hero';
import Paragraph from 'grommet/components/Paragraph';
import Header from 'grommet/components/Header';
import Headline from 'grommet/components/Headline';
import Title from 'grommet/components/Title';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import Button from 'grommet/components/Button';
import TextInput from 'grommet/components/TextInput';
import Menu from 'grommet/components/Menu';
import WorldMap from 'grommet/components/WorldMap';
import Image from 'grommet/components/Image';

export default class Home extends Component {
	render() {
		return (
			<Box>
				<Header className="header" colorIndex="dark">
					<Title>Lazy Explorer</Title>
					<Box flex justify="end" direction="row" responsive={false}>
						<Menu responsive inline primary={false} direction="row">
							<Anchor href="#about-us" className="nav-item active">
								About Us
							</Anchor>
							<Anchor href="#features" className="nav-item">
								Features
							</Anchor>
							<Anchor href="#learn" className="nav-item">
								Learn More
							</Anchor>
						</Menu>
					</Box>
				</Header>
				<Box>
					<Hero
						size="small"
						backgroundImage="/static/hero_image.jpg"
						className="hero"
					>
						<Headline className="hero-headline" strong>
							Explore Anywhere, From Anywhere.
						</Headline>
					</Hero>
				</Box>

				<Box className="mission-section" align="center">
					<Box
						className="world-map"
						align="center"
						pad={{ horizontal: 'large' }}
					>
						<WorldMap
							series={[
								{
									continent: 'NorthAmerica',
									label: 'North America'
								},
								{
									continent: 'SouthAmerica',
									label: 'South America'
								},
								{
									continent: 'Europe',
									label: 'Europe'
								},
								{
									continent: 'Africa',
									label: 'Africa'
								},
								{
									continent: 'Asia',
									label: 'Asia'
								},
								{
									continent: 'Australia',
									label: 'Australia'
								}
							]}
						/>
					</Box>
					<Box
						pad="large"
						align="center"
						textAlign="center"
						size={{ width: { max: 'xxlarge' } }}
						id="about-us"
					>
						<Heading tag="h1" strong margin="none">
							We want to make the world accessible to everyone
						</Heading>
						<Paragraph
							className="mission-sub"
							size="large"
							width="large"
							strong
						>
							Ever thought you would like to see some remote corner of the world
							or a rare species or live event as it happens? Now you can. Lazy
							Explorer provides a hub for people to connect and share with you
							via their smart phone.
						</Paragraph>
					</Box>
				</Box>
				<Box id="features" colorIndex="light-1">
					<Box
						direction="row"
						flex="grow"
						className="feature-section"
						pad={{ horizontal: 'large' }}
					>
						<Card
							heading={<Heading strong>Get Connected</Heading>}
							description="Easily enter any live tour happening around the world or replay a past tour whenever you want."
							size="small"
							basis="1/2"
						/>
						<Box basis="1/2">
							<Image
								className="feature-image"
								fit="cover"
								src="/static/feature-1.jpg"
							/>
						</Box>
					</Box>
					<Box
						direction="row"
						flex="grow"
						className="feature-section"
						pad={{ horizontal: 'large' }}
					>
						<Box basis="1/2">
							<Image
								className="feature-image"
								fit="cover"
								src="/static/feature-2.jpg"
							/>
						</Box>
						<Card
							heading={<Heading strong>Learn</Heading>}
							description="Let our certified guides take you along on a one of a kind journey."
							size="small"
							basis="1/2"
						/>
					</Box>
					<Box
						direction="row"
						flex="grow"
						className="feature-section"
						pad={{ horizontal: 'large' }}
					>
						<Card
							heading={<Heading strong>Teach</Heading>}
							description="Earn money by becoming a certified Lazy explorer guide and share a unique aspect of your culture or location with people all over the globe."
							size="small"
							basis="1/2"
						/>
						<Box basis="1/2">
							<Image
								className="feature-image"
								fit="cover"
								src="/static/feature-3.jpg"
							/>
						</Box>
					</Box>
				</Box>
				<Footer className="footer" full="horizontal">
					<Box
						colorIndex="accent-1"
						pad="large"
						align="center"
						full="horizontal"
					>
						<Box
							pad="none"
							align="center"
							textAlign="center"
							size={{ width: { max: 'xxlarge' } }}
							colorIndex="dark"
						>
							<Heading tag="h1" strong margin="none">
								Learn More
							</Heading>
							<Paragraph size="large" width="large">
								Sign up to recieve updates and be the first to know when you can
								start exploring!
							</Paragraph>
						</Box>
						<Box
							className="footer-cards-container"
							pad={{ vertical: 'medium' }}
							direction="row"
							flex="grow"
							id="learn"
							align="center"
						>
							<Form
								action="https://lazyexplorer.us17.list-manage.com/subscribe/post?u=8e88b86bb61a89a1dadf76280&amp;id=0545bd7455"
								method="post"
								id="mc-embedded-subscribe-form"
								name="mc-embedded-subscribe-form"
								className="validate signup-form"
								target="_blank"
								novalidate
							>
								<div id="mc_embed_signup_scroll">
									<FormFields>
										<div className="mc-field-group">
											<TextInput
												className="email-input"
												type="email"
												name="EMAIL"
												class="required email"
												id="mce-EMAIL"
												placeHolder="Email Address"
											/>
										</div>
										<div id="mce-responses" className="clear">
											<div
												className="response"
												id="mce-error-response"
												style={{ display: 'none' }}
											/>
											<div
												className="response"
												id="mce-success-response"
												style={{ display: 'none' }}
											/>
										</div>
										<div
											style={{ position: 'absolute', left: '-5000px' }}
											aria-hidden="true"
										>
											<input
												type="text"
												name="b_8e88b86bb61a89a1dadf76280_0545bd7455"
												tabIndex="-1"
												value=""
											/>
										</div>
									</FormFields>
									<Footer pad={{ vertical: 'medium' }}>
										<Button
											type="submit"
											label="Submit"
											primary
											value="Subscribe"
											name="subscribe"
											id="mc-embedded-subscribe"
											class="button"
										/>
									</Footer>
								</div>
							</Form>
						</Box>
					</Box>
				</Footer>
			</Box>
		);
	}
}
