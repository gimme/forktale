import Crossroad from "./Crossroad"

type Props = {
    crossroad: Crossroad
}

export default function CrossroadCard(props: Props) {
    const crossroad = props.crossroad

    return (
        <>
            <div>
                <p>
                    <b>Title:</b> {crossroad.title}
                </p>
                <p>
                    <b>Card Set:</b> {crossroad.cardSet}
                </p>
                <p>
                    <b>Trigger:</b> {crossroad.trigger}
                </p>
                <p>
                    <b>Context:</b> {crossroad.context}
                </p>
                <p>
                    <b>Result:</b> {crossroad.result}
                </p>
                {crossroad.options?.map((option, i) => (
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
                    <b>Vote:</b> {crossroad.vote?.toString() ?? "false"}
                </p>
                <p>
                    <b>Mature:</b> {crossroad.mature?.toString() ?? "false"}
                </p>
                <p>
                    <b>Co-op:</b> {(!crossroad.noCoop).toString()}
                </p>
            </div>
        </>
    )
}
