import { TelegramInteractionBuilder }
    from "telegram-interaction-builder"
import { HDResponseProvider } from "./hd-response-provider";
import { IResponseProvider } from "telegram-interaction-builder/dist/types";

export class HomoDigitalisTelegramChatBot {
    private interactionBuilder: TelegramInteractionBuilder
    private responseProvider: IResponseProvider

    public constructor() {

        const pathToYourConfigFile: string = "../../../.env"

        this.responseProvider = new HDResponseProvider()

        this.interactionBuilder =
            new TelegramInteractionBuilder(pathToYourConfigFile, this.responseProvider)
    }

    public async startMyTelegramChatBot(): Promise<void> {
        // this.interactionBuilder.setResponseProvider(this.responseProvider)
        this.interactionBuilder.startListening()
    }
}

const consumer: HomoDigitalisTelegramChatBot = new HomoDigitalisTelegramChatBot()
consumer.startMyTelegramChatBot()