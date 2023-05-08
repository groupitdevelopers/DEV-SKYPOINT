import React from 'react'

export const OpeningHours = props => {
  const anchorId = props.slice.primary.anchor_id

  return (
    <section
      className='container'
      id = {anchorId}
    >
      <div className='openWrapper'>
        <div className='row'>
            <div className='col' />
            <div className='openHoursWrapper'>
                <div className='row'>
                    <div className='col hoursHeader'>Date</div>
                    <div className='col hoursHeader'>Open </div>
                    <div className='col hoursHeader'>Close</div>
                </div>
                { props.slice.items.map((o, index) => (
                        <div  key={o.date} className='row'>
                            <div className='col hoursLine'>{o.date}</div>
                            <div className='col hoursLine'>{o.open}</div>
                            <div className='col hoursLine'>{o.close}</div>
                        </div>
                    )
                )}
            </div>
            <div className='col' />
        </div>
      </div>
    </section>
  )
}
