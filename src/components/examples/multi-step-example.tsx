import { LightBorder, ShineBorder } from '@/components/shine'
import {
  MultiStep,
  MultiStepActions,
  MultiStepContent,
  MultiStepItem,
  MultiStepList,
  MultiStepNext,
  MultiStepPrev,
} from '@/components/ui/multi-step'

export function MultiStepExample() {
  return (
    <MultiStep defaultValue="1">
      <MultiStepList className="m-auto w-min">
        <MultiStepItem value="1">First</MultiStepItem>
        <MultiStepItem value="2">Second</MultiStepItem>
        <MultiStepItem value="3">Last</MultiStepItem>
      </MultiStepList>

      <div className="relative overflow-hidden rounded-xl border bg-background p-6 lg:min-w-[500px]">
        <ShineBorder />
        <LightBorder />
        <MultiStepContent value="1">
          <h2 className="text-2xl font-bold">First Step</h2>
          <p className="text-sm text-muted-foreground">
            You can go to the next one.
          </p>
        </MultiStepContent>
        <MultiStepContent value="2">
          <h2 className="text-2xl font-bold">Second Step</h2>
          <p className="text-sm text-muted-foreground">
            you can go to the next one or go back.
          </p>
        </MultiStepContent>
        <MultiStepContent value="3">
          <h2 className="text-2xl font-bold">Final Step</h2>
          <p className="text-sm text-muted-foreground">You can come back.</p>
        </MultiStepContent>
        <MultiStepActions>
          <MultiStepPrev>Prev</MultiStepPrev>
          <MultiStepNext>Next</MultiStepNext>
        </MultiStepActions>
      </div>
    </MultiStep>
  )
}
