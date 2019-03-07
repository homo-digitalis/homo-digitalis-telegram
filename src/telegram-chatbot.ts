import { TelegramInteractionBuilder, DefaultResponseProvider, AdvancedResponseProvider }
    from "telegram-interaction-builder"
import { HDResponseProvider } from "./hd-response-provider";
import { IResponseProvider } from "telegram-interaction-builder/dist/types";

export class TelegramChatBotOutOfTheBox {
    private interactionBuilder: TelegramInteractionBuilder
    private advancedResponseProvider: IResponseProvider

    public constructor() {

        // remember to include its name in .gitignore to keep your BOT_TOKEN secret
        const pathToYourConfigFile: string = "../../../.env"

        this.advancedResponseProvider = new HDResponseProvider()

        this.interactionBuilder =
            new TelegramInteractionBuilder(pathToYourConfigFile, new DefaultResponseProvider())
    }

    public async startMyTelegramChatBot(): Promise<void> {
        // await this.advancedResponseProvider.learn("exampleMap")

        this.interactionBuilder.setResponseProvider(this.advancedResponseProvider)
        this.interactionBuilder.startListening()
    }

}

const consumer: TelegramChatBotOutOfTheBox = new TelegramChatBotOutOfTheBox()
consumer.startMyTelegramChatBot()