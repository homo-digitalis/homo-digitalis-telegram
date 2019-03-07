
import { NLPTrainer } from "nlp-trainer"
import { IAnswer, Processor } from "nlp-with-actions"
import { TelegramResponse } from "telegram-interaction-builder";
import { IResponseProvider } from "telegram-interaction-builder/dist/types";
import { RequestService } from "request-with-buffer"

export class HDResponseProvider implements IResponseProvider {

    private telegramResponse: TelegramResponse | undefined

    public constructor() {
    }

    public getName(): string {
        return this.constructor.name
    }

    public async learn(trainingDataID: string): Promise<void> {
        console.log("who called learn?")
        // await this.processor.learn(await this.nlpTrainer.getIntents(trainingDataID))
    }

    public async getResponse(target: string, input: string): Promise<TelegramResponse> {



    const requestService: RequestService = RequestService.getInstance()
    const bufferIntervalInMilliSeconds: number = 1 // no need to buffer here

    const exampleURL: string = `http://localhost:3000/api/name/Homo Digitalis/input/${input}`

    const options: any = {
        url: exampleURL,
    }
    console.log("result")
    const answer: IAnswer = 
        JSON.parse((await requestService.get(options, bufferIntervalInMilliSeconds)).data)

        const text: string = (answer.text === undefined) ?
            "I don't know what to say." : answer.text

         this.telegramResponse = new TelegramResponse(target, text, [])

        return this.telegramResponse
    }
}