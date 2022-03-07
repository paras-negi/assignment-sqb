import React from 'react'

export default function EmptyState({show, data}) {
    return (
        <div>
            {data.mainText || "No items found"}
        </div>
    )
}
