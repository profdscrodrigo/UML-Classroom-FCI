import { Text } from "../Text";

interface LogoProps {
    size: number
}

export default ({size}: LogoProps) => (
    <Text size={size} weight={'700'}>
          Order
        <Text size={size}>App</Text>
    </Text>
)