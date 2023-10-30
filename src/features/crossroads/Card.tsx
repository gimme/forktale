import CardData from "./CardData"

type CardProps = {
    cardData: CardData
}

export default function Card(props: CardProps) {
    const data = props.cardData

    return (
        <div>
            <p>
                <b>Title:</b> {data.title}
            </p>
            <p>
                <b>Card Set:</b> {data.cardSet}
            </p>
            <p>
                <b>Trigger:</b> {data.trigger}
            </p>
            <p>
                <b>Context:</b> {data.context}
            </p>
            <p>
                <b>Result:</b> {data.result}
            </p>
            {data.options?.map((option, i) => (
                <div key={i}>
                    <p>
                        <b>Action{i + 1}:</b> {option.action}
                    </p>
                    <p>
                        <b>Result{i + 1}:</b> {option.result}
                    </p>
                </div>
            )) ?? null}
            <p>
                <b>Vote:</b> {data.vote?.toString() ?? "false"}
            </p>
            <p>
                <b>Mature:</b> {data.mature?.toString() ?? "false"}
            </p>
            <p>
                <b>Co-op:</b> {(!data.noCoop).toString()}
            </p>
        </div>
    )
}
