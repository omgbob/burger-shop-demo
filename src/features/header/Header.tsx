import {
  Image,
  Group,
  Flex,
  Button,
  Container,
  Popover,
  Text,
  Stack,
  ActionIcon,
  NumberInput,
  rem,
  Divider,
} from "@mantine/core"
import logo from "../../burger.png"
import { NavLink } from "react-router-dom"
import {
  decrementAmount,
  incrementAmount,
  selectCartItemCount,
  selectCartItems,
  selectCartTotalPrice,
} from "../cart/cartSlice"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { ICartItem } from "../../types/interfaces"
import { IconMinus, IconPlus } from "@tabler/icons-react"

const CartItem = (item: ICartItem) => {
  const dispatch = useAppDispatch()

  return (
    <Group position="apart" key={item.menuItem.id}>
      <Text>{item.menuItem.name}</Text>
      <Group spacing={5}>
        <ActionIcon
          size={24}
          variant="outline"
          radius="lg"
          color="orange.4"
          onClick={() => dispatch(decrementAmount({ item: item.menuItem }))}
        >
          <IconMinus />
        </ActionIcon>
        <NumberInput
          hideControls
          value={item.amount}
          min={0}
          size="sm"
          radius="sm"
          type="number"
          styles={{ input: { width: rem(48), textAlign: "center" } }}
        />

        <ActionIcon
          size={24}
          variant="outline"
          radius="lg"
          color="orange.4"
          onClick={() => dispatch(incrementAmount({ item: item.menuItem }))}
        >
          <IconPlus />
        </ActionIcon>
      </Group>
    </Group>
  )
}
const MiniCart = () => {
  const cartItems = useAppSelector(selectCartItems)
  const cartTotal = useAppSelector(selectCartTotalPrice)
  const dispatch = useAppDispatch()

  if (cartItems.length === 0) {
    return <Text>Cart is empty.</Text>
  }

  return (
    <Stack>
      {cartItems.map(CartItem)}
      <Divider />
      <Group position="apart">
        <Text>Total:</Text>
        <Text>${cartTotal}</Text>
      </Group>
      <Button>Checkout</Button>
    </Stack>
  )
}

export function Header() {
  const cartCount = useAppSelector(selectCartItemCount)

  return (
    <header>
      <Flex justify="center">
        <Image maw={400} radius="md" src={logo} alt="logo" />
      </Flex>
      <Container>
        <Group position="apart" bg="rgb(0,0,0, 0.3)" p="sm">
          <Group spacing="sm">
            <Button
              component={NavLink}
              to="/"
              size="lg"
              radius="md"
              variant="filled"
            >
              Home
            </Button>
            <Button size="lg" radius="md" variant="filled">
              Register
            </Button>
            <Button size="lg" radius="md" variant="filled">
              Order
            </Button>
            <Button size="lg" radius="md" variant="filled">
              Features
            </Button>
          </Group>
          <Group position="right">
            <Popover
              width={400}
              position="bottom-end"
              withArrow
              arrowOffset={16}
              offset={2}
              radius="md"
              shadow="md"
            >
              <Popover.Target>
                <Button size="lg" radius="md" variant="light">
                  View Cart ({cartCount})
                </Button>
              </Popover.Target>
              <Popover.Dropdown>
                <MiniCart />
              </Popover.Dropdown>
            </Popover>
          </Group>
        </Group>
      </Container>
    </header>
  )
}
