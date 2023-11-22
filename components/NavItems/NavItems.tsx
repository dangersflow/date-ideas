import { Group, NavLink } from '@mantine/core';
import { IconActivity, IconChevronRight } from '@tabler/icons-react';

export function NavItems() {
  return (
    <Group>
      <NavLink
        label="Date Ideas"
        leftSection={<IconActivity size="1rem" stroke={1.5} />}
        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
        active
        href="/date-ideas"
        description="Generate random date ideas!"
      />
      <NavLink
        label="Food Ideas"
        leftSection={<IconActivity size="1rem" stroke={1.5} />}
        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
        active
        href="/food-ideas"
        description="Grab random bite to eat!"
      />
      <NavLink
        label="Misc Ideas"
        leftSection={<IconActivity size="1rem" stroke={1.5} />}
        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
        active
        description="Surprise me!"
      />
    </Group>
  );
}
