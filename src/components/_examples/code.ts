export const code = `
import {
  MotionsTabs,
  MotionTabsContent,
  MotionTabsTrigger,
  TabsList,
} from '@/components/ui/tabs'

export default function TabsExample() {
  return (
    <MotionsTabs defaultValue="1">
      <TabsList className="w-[400px] ">
        <MotionTabsTrigger value="1" className="flex-1">
          Contet 1
        </MotionTabsTrigger>
        <MotionTabsTrigger value="2" className="flex-1">
          Content 2
        </MotionTabsTrigger>
      </TabsList>
      <MotionTabsContent value="1" className="w-[400px]">
        <p>Some content</p>
      </MotionTabsContent>
      <MotionTabsContent value="2" className="w-[400px]">
        <p>Another content</p>
      </MotionTabsContent>
    </MotionsTabs>
  )
}
`
