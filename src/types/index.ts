export type Message = {
	sender: 'user' | 'bot'
	text: string
}

export type Scenario = {
	name: string
	welcomeMessage: string
	responses: { pattern: RegExp; reply: string }[]
}
