import { TECHS } from '@/data/techs'

import { Slider } from './slider'

export function TechsSlider() {
  return (
    <div className="flex flex-col rounded-lg">
      <Slider>
        {TECHS.map(({ icon, name }) => (
          <div key={name} className="flex items-center gap-1">
            <span>{icon}</span>
            <span className="flex-shrink-0 text-base text-muted-foreground">
              {name}
            </span>
          </div>
        ))}
      </Slider>
    </div>
  )
}
