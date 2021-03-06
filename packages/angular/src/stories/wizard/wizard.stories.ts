/*
 * Copyright (c) 2016-2020 VMware, Inc.
 * All Rights ReserveThis software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { moduleMetadata } from '@storybook/angular';
import { select } from '@storybook/addon-knobs';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const basicTemplate = require('!!raw-loader!./basic.html'); // eslint-disable-line

export default {
  title: 'Wizard',
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule, ClarityModule],
    }),
  ],
};

export const Basic = () => {
  const size = select(
    'Size',
    {
      Small: 'sm',
      Medium: 'md',
      Large: 'lg',
    },
    'sm'
  );
  let open = false; // eslint-disable-line prefer-const
  function toggle() {
    this.open = !this.open;
  }
  return {
    title: 'Basic',
    template: basicTemplate.default,
    props: {
      open,
      size,
      toggleWizard: toggle,
    },
  };
};
