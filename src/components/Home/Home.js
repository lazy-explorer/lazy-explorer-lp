import React, { Component } from 'react';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Footer from 'grommet/components/Footer';
import Heading from 'grommet/components/Heading';
import Hero from 'grommet/components/Hero';
import Paragraph from 'grommet/components/Paragraph';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import Button from 'grommet/components/Button';
import TextInput from 'grommet/components/TextInput';
import Menu from 'grommet/components/Menu';
import WorldMap from 'grommet/components/WorldMap';
import Image from 'grommet/components/Image';

export default class Home extends Component {
	onEmailSubmit(e) {
		e.preventDefault();
		console.log(e.target);
	}
	render() {
		return (
			<Box>
				<Header className="header" colorIndex="dark">
					<Title>Lazy Explorer</Title>
					<Box flex={true} justify="end" direction="row" responsive={false}>
						<Menu
							responsive={true}
							inline={true}
							primary={false}
							direction="row"
						>
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
						size="large"
						backgroundImage="/static/hero_image.jpg"
						colorIndex="dark"
						className="hero"
					>
						<Card
							heading={
								<Heading className="hero-headline" strong={true}>
									See the world, from the comfort of your own home
								</Heading>
							}
							size="large"
							className="hero-card"
							align="center"
						/>
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
									label: 'North America',
									colorIndex: 'graph-1'
								},
								{
									continent: 'SouthAmerica',
									label: 'South America',
									colorIndex: 'accent-2'
								},
								{
									continent: 'Europe',
									label: 'Europe',
									colorIndex: 'unset'
								},
								{
									continent: 'Africa',
									label: 'Africa',
									colorIndex: 'graph-2'
								},
								{
									continent: 'Asia',
									label: 'Asia',
									colorIndex: 'graph-3'
								},
								{
									continent: 'Australia',
									label: 'Australia',
									colorIndex: 'graph-4'
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
						<Heading tag="h1" strong={true} margin="none">
							We want to make the world accessible to everyone
						</Heading>
						<Paragraph size="xlarge" width="large">
							Our mission is to help create a lorem ipsum lorem ipsum lorem
							lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem lorem
							ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem
							ipsum
						</Paragraph>
					</Box>
				</Box>
				<Box colorIndex="light-1">
					<Box
						direction="row"
						flex="grow"
						className="feature-section"
						pad={{ horizontal: 'large' }}
					>
						<Card
							heading={<Heading strong={true}>Get Connected</Heading>}
							description="Lorem Ipsum..."
							size="small"
							basis="1/2"
						/>
						<Box basis="1/2">
							<Image fit="cover" src={'/static/feature-1.jpg'} />
						</Box>
					</Box>
					<Box
						direction="row"
						flex="grow"
						className="feature-section"
						pad={{ horizontal: 'large' }}
					>
						<Box basis="1/2">
							<Image fit="cover" src={'/static/feature-1.jpg'} />
						</Box>
						<Card
							heading={<Heading strong={true}>Get Connected</Heading>}
							description="Lorem Ipsum..."
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
							heading={<Heading strong={true}>Get Connected</Heading>}
							description="Lorem Ipsum..."
							size="small"
							basis="1/2"
						/>
						<Box basis="1/2">
							<Image fit="cover" src={'/static/feature-1.jpg'} />
						</Box>
					</Box>
				</Box>
				<Footer full="horizontal">
					<Box
						colorIndex="neutral-1"
						pad="large"
						align="center"
						full="horizontal"
					>
						<Box
							pad="none"
							align="center"
							textAlign="center"
							size={{ width: { max: 'xxlarge' } }}
							id="about-us"
						>
							<Heading tag="h1" strong={true} margin="none">
								Learn More
							</Heading>
							<Paragraph size="xlarge" width="large">
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
							<Form onSubmit={e => this.onEmailSubmit(e)}>
								<FormFields>
									<TextInput
										id="item1"
										name="item-1"
										className="email-input"
										placeHolder="Email Address"
									/>
								</FormFields>
								<Footer pad={{ vertical: 'medium' }}>
									<Button label="Submit" type="submit" primary={true} />
								</Footer>
							</Form>
						</Box>
					</Box>
				</Footer>
			</Box>
		);
	}
}
