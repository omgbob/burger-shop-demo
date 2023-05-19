import { Button, Container, Group, Paper, Text, Title } from "@mantine/core"

import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { selectCartItems } from "./cartSlice"

export function Cart() {
  const cartItems = useAppSelector(selectCartItems)
  const dispatch = useAppDispatch()

  return cartItems.length > 0 ? (
    <Container my="md">
      <Paper withBorder shadow="xs" radius="md" p="md">
        <Title fz="md" fw={700} mb="xs">Shopping Cart</Title>
        {cartItems.length == 0 && <Text>Cart is empty</Text>}
      </Paper>
    </Container>
  ) : null
}
