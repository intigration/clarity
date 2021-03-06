/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { property } from '@clr/core/internal';
import { CdsInternalControlInline } from '@clr/core/forms';
import { styles } from './toggle.element.css.js';

/**
 * Toggle
 *
 * ```typescript
 * import '@clr/core/toggle/register.js';
 * ```
 *
 * ```html
 * <cds-toggle>
 *   <label>Toggle</label>
 *   <input type="checkbox" />
 * </cds-toggle>
 * ```
 *
 * @element cds-toggle
 * @slot default - For projecting checkbox
 * @cssprop --background
 * @cssprop --border
 * @cssprop --border-radius
 * @cssprop --height
 * @cssprop --width
 * @cssprop --anchor-background
 * @cssprop --anchor-border-radius
 * @cssprop --anchor-width
 * @cssprop --anchor-height
 */
export class CdsToggle extends CdsInternalControlInline {
  @property({ type: Boolean }) protected checked = false;

  static get styles() {
    return [...super.styles, styles];
  }

  firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);
    this.checked = this.inputControl.checked;
    this.inputControl.addEventListener('change', () => (this.checked = this.inputControl.checked));
  }
}
