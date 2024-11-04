import {
  MotionsTabs,
  MotionTabsContent,
  MotionTabsList,
  MotionTabsTrigger,
} from '@/components/ui/motion-tabs'

export default function TabsExample() {
  return (
    <MotionsTabs defaultValue="1">
      <MotionTabsList className="w-[400px]">
        <MotionTabsTrigger value="1" className="flex-1">
          Contet 1
        </MotionTabsTrigger>
        <MotionTabsTrigger value="2" className="flex-1">
          Content 2
        </MotionTabsTrigger>
      </MotionTabsList>
      <MotionTabsContent value="1">
        <p>Some content</p>
      </MotionTabsContent>
      <MotionTabsContent value="2">
        <p>Another content</p>
      </MotionTabsContent>
    </MotionsTabs>
  )
}
