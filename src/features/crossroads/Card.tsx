import CardData from "./CardData"

type CardProps = {
    cardData: CardData
}

export default function Card(props: CardProps) {
    const data = props.cardData

    return (
        <div className="card">
            <p>Title: {data.title}</p>
            <p>Card Set: {data.cardSet}</p>
            <p>Trigger: {data.trigger}</p>
            <p>Context: {data.context}</p>
            <p>Result: {data.result}</p>
            {data.options?.map((option, i) => (
                <div key={i}>
                    <p>
                        Action{i + 1}: {option.action}
                    </p>
                    <p>
                        Result{i + 1}: {option.result}
                    </p>
                </div>
            )) ?? null}
            <p>Vote: {data.vote?.toString() ?? "false"}</p>
            <p>Mature: {data.mature?.toString() ?? "false"}</p>
            <p>Co-op: {(!data.noCoop).toString()}</p>
        </div>
    )
}
