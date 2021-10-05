import React from 'react'
import { FlexLayout } from '../components/styles';
import { ExternalAddress } from './styles';

const Footer = () => {

	return (
		<FlexLayout width="100%" justify="flex-end" padding="10px 0 20px 0">
			<div className="status-circle"></div>
			<ExternalAddress href='https://bscscan.com/' target='blank'>
				Latest Block: 5933635
			</ExternalAddress>
			<ExternalAddress href='https://bscscan.com/address/0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63' target='blank'>
				XVS
			</ExternalAddress>
			<ExternalAddress href='https://t.me/VenusProtocol' target='blank'>
				Support
			</ExternalAddress>
			<ExternalAddress href='https://venus.io/Whitepaper.pdf' target='blank'>
				Whitepaper
			</ExternalAddress>
		</FlexLayout>
	)
}

export default Footer;
