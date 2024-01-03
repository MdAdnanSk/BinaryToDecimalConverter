

/** @jsxImportSource @emotion/react */

import { Fragment, useCallback, useContext } from "react"
import { Fragment_054be72e0ea98018059eac5951b3d7a7 } from "/utils/stateful_components"
import { Button, HStack, Input, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, set_val } from "/utils/state"
import NextHead from "next/head"



export function Input_354acab15c3946f3dc34694dc17e79c8 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_change_ad7a77dcecd6de86bf6c79f4ab25ef48 = useCallback((_e0) => addEvents([Event("state.state.set_binary", {value:_e0.target.value})], (_e0), {}), [addEvents, Event])

  return (
    <Input onChange={on_change_ad7a77dcecd6de86bf6c79f4ab25ef48} placeholder={`Enter Binary Number`} sx={{"fontFamily": "Inter", "textAlign": "center", "fontSize": "14px", "color": "black", "background": "white", "paddingX": "48px", "paddingY": "12px", "borderRadius": "lg", "width": "50%"}} type={`text`}/>
  )
}

export function Text_8ac5bff702ea752565827baf4dcadf55 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Text sx={{"textAlign": "center", "fontSize": "16px", "lineHeight": "36px", "color": "#F3F5F7", "fontFamily": "DM Sans", "maxWidth": "620px"}}>
  {`Decimal: ${state__state.result}`}
</Text>
  )
}

export function Text_a2978287abb19243c5c99d853d082977 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Text sx={{"textAlign": "center", "fontSize": "16px", "color": "red", "lineHeight": "36px", "fontFamily": "DM Sans", "maxWidth": "620px"}}>
  {`${state__state.error}`}
</Text>
  )
}

export function Button_efa229bab265d99c708c7983a668fe87 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_6e8f2fa0d7465fa6996bb276134f1aa7 = useCallback((_e) => addEvents([Event("state.state.convert", {})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_6e8f2fa0d7465fa6996bb276134f1aa7} sx={{"borderRadius": "10px", "boxShadow": "0 5px 15px rgba(0, 0, 0, 0.3)", "backgroundImage": "linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)", "color": "white", "width": "100px", "_hover": {"background": "lightgrey"}}}>
  {`Convert`}
</Button>
  )
}

export function Button_58767aabc4255364c6ae9a62a0028794 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_6a464883437a351a7f011d0a70ac5554 = useCallback((_e) => addEvents([Event("state.state.clear", {})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_6a464883437a351a7f011d0a70ac5554} sx={{"borderRadius": "10px", "boxShadow": "0 5px 15px rgba(0, 0, 0, 0.3)", "backgroundImage": "linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)", "color": "white", "width": "100px", "_hover": {"background": "lightgrey"}}}>
  {`Clear`}
</Button>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_054be72e0ea98018059eac5951b3d7a7/>
  <Fragment>
  <VStack sx={{"background": "#04090B", "height": "100vh", "paddingTop": "10%", "paddingLeft": "5%", "paddingRight": "5%"}}>
  <Text sx={{"textAlign": "center", "fontSize": "28px", "lineHeight": "36px", "color": "#F3F5F7", "fontFamily": "DM Sans", "maxWidth": "620px", "paddingTop": "16px", "paddingBottom": "16px"}}>
  {`Binary To Decimal Converter`}
</Text>
  <Text_a2978287abb19243c5c99d853d082977/>
  <Input_354acab15c3946f3dc34694dc17e79c8/>
  <HStack>
  <Button_efa229bab265d99c708c7983a668fe87/>
  <Button_58767aabc4255364c6ae9a62a0028794/>
</HStack>
  <Text_8ac5bff702ea752565827baf4dcadf55/>
</VStack>
</Fragment>
  <NextHead>
  <title>
  {`Nextpy App`}
</title>
  <meta content={`A Nextpy app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
