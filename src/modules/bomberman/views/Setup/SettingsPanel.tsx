import React, { useState } from 'react'
import { Select } from '3oilerplate'
// import { TrickContext } from '../../context'
// import { Trick } from '../../components'

export const SettingsPanel = () => {
  // const { tricks, settings, setSettings }: any = useContext(TrickContext)
  const [settings, setSettings] = useState<any>({})

  // useEffect(() => {
  //   if (tricks && settings && settings.difficulty) {
  //     setExpectedTricks(sampleSize(filter(tricks, settings), 3))
  //   }
  // }, [tricks, settings])

  return (
    <>
      <Select
        block
        options={[]}
        value={settings.difficulty}
        onChange={(value: number) => setSettings({ difficulty: value })}
      />
    </>
  )
}
