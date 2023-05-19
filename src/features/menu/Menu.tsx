import {
  Button,
  Card,
  Center,
  Container,
  Group,
  Image,
  Rating,
  SimpleGrid,
  Space,
  Text,
  Title,
} from "@mantine/core"

import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { selectAllMenuItems } from "./menuSlice"
import { addItem } from "../cart/cartSlice"
import type { MenuItem } from "../../types"

const MenuItem = (item: MenuItem) => {
  const dispatch = useAppDispatch()

  return (
    <Card shadow="sm" padding="md" radius="md" withBorder key={item.id}>
      <Card.Section>
        <Image src={item.img} height={160} alt={item.dsc} />
      </Card.Section>
      <Text mt="sm" mb={2} weight={600}>
        {item.name}
      </Text>
      <Rating
        value={item.rate}
        fractions={2}
        readOnly
        size="xs"
        color="orange.9"
      />
      <Space h="md" />
      <Group spacing="md">
        <Text fz="lg" fw={700} sx={{ lineHeight: 1 }}>
          ${item.price}
        </Text>
        <Button
          radius="md"
          style={{ flex: 1 }}
          color="yellow"
          onClick={() => dispatch(addItem({ item, amount: 1 }))}
        >
          Add to cart
        </Button>
      </Group>
    </Card>
  )
}

export function Menu() {
  const menuItems = useAppSelector(selectAllMenuItems)

  return (
    <Container my="xl">
      <Space h="lg" />

      <Center>
        <Title mb="md" order={1}>
          Menu
        </Title>
      </Center>
      <Space h="lg" />

      <SimpleGrid
        cols={4}
        breakpoints={[
          { maxWidth: "md", cols: 3, spacing: "md" },
          { maxWidth: "sm", cols: 2, spacing: "sm" },
          { maxWidth: "xs", cols: 1, spacing: "sm" },
        ]}
      >
        {menuItems.map(MenuItem)}
      </SimpleGrid>
    </Container>
  )
}
