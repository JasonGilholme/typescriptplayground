import React from 'react'; // we need this to make JSX compile

type ComponentProps = {
    title: string,
    paragraph: string
}

export const TypedComponent = ({ title, paragraph }: ComponentProps) => <div>
    <h2>{ title }</h2>
    <p>
        { paragraph }
    </p>
</div>



