export type Message = {
	sender: 'user' | 'bot'
	text: string
}

export type Scenario = {
	name: string
	welcomeMessage: string
	responses: { pattern: RegExp; reply: string }[]
}

export type Step = {
	title: string
	description: string
	image?: string
	messengers?: Messenger[]
	diagram?: boolean
	checklist?: string[]
}

export type Messenger = {
	name: string
	icon: 'telegram' | 'whatsapp' | 'facebook' | 'instagram'
}

export type FilteredRows = {
	id: number
	date: string
	user: string
	messenger: string
	message: string
	status: string
}
