import React from 'react'

const MemberName = () => {

    const JSI14_members_name = [
        {
            id : 1,
            name : ' Phạm Đức Anh'
        },
        {
            id : 2,
            name : "Võ Đoàn Phương Vy"
        },
        {
            id : 3,
            name : 'Nguyễn Đức Anh'
        },
        {
            id : 4,
            name : 'Hoàng Kỳ Anh'
        },
        {
            id : 5,
            name : 'Phạm Phú Bình'
        }
    ]

  return (
    <div>
        {
            JSI14_members_name.map(
                (item, index ) => {
                    return (
                        <div key={item.id} className='text-blue-600 text-2xl mt-4'> 
                            {item.name}
                        </div>
                    )
                }
            )

        }

    </div>
  )
}

export default MemberName