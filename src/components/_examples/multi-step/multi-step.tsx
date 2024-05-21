import { LightBorder, ShineBorder } from '@/components/shine'
import { MultiStep } from '@/components/ui/multi-step'

export function MultiStepExample() {
  return (
    <MultiStep.Root defaultValue="1">
      <MultiStep.List className="m-auto w-min">
        <MultiStep.Step value="1">First</MultiStep.Step>
        <MultiStep.Step value="2">Second</MultiStep.Step>
        <MultiStep.Step value="3">Last</MultiStep.Step>
      </MultiStep.List>

      <div className="relative overflow-hidden rounded-xl border bg-background p-6 lg:min-w-[500px]">
        <ShineBorder />
        <LightBorder />
        <MultiStep.Content value="1">
          <h2 className="text-2xl font-bold">First Step</h2>
          <p className="text-sm text-muted-foreground">
            You can go to the next one.
          </p>
        </MultiStep.Content>
        <MultiStep.Content value="2">
          <h2 className="text-2xl font-bold">Second Step</h2>
          <p className="text-sm text-muted-foreground">
            you can go to the next one or go back.
          </p>
        </MultiStep.Content>
        <MultiStep.Content value="3">
          <h2 className="text-2xl font-bold">Final Step</h2>
          <p className="text-sm text-muted-foreground">You can come back.</p>
        </MultiStep.Content>
        <MultiStep.Actions>
          <MultiStep.Prev>Prev</MultiStep.Prev>
          <MultiStep.Next>Next</MultiStep.Next>
        </MultiStep.Actions>
      </div>
    </MultiStep.Root>
  )
}
