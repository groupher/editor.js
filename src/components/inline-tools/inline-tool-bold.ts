import $ from '../dom';
import { InlineTool, SanitizerConfig } from '../../../types';

/**
 * Bold Tool
 *
 * Inline Toolbar Tool
 *
 * Makes selected text bolder
 */
export default class BoldInlineTool implements InlineTool {
  /**
   * Specifies Tool as Inline Toolbar Tool
   *
   * @returns {boolean}
   */
  public static isInline = true;

  /**
   * Title for hover-tooltip
   */
  public static title = 'Bold';

  /**
   * Sanitizer Rule
   * Leave <b> tags
   *
   * @returns {object}
   */
  public static get sanitize(): SanitizerConfig {
    return {
      b: {},
    } as SanitizerConfig;
  }

  /**
   * Native Document's command that uses for Bold
   */
  private readonly commandName: string = 'bold';

  /**
   * Styles
   */
  private readonly CSS = {
    button: 'ce-inline-tool',
    buttonActive: 'ce-inline-tool--active',
    buttonModifier: 'ce-inline-tool--bold',
  };

  /**
   * Elements
   */
  private nodes: {button: HTMLButtonElement} = {
    button: undefined,
  };

  /**
   * Create button for Inline Toolbar
   */
  public render(): HTMLElement {
    this.nodes.button = document.createElement('button') as HTMLButtonElement;
    this.nodes.button.type = 'button';
    this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier);
    // groupher-customize 
    const SvgIcon = $.svg('bold', 12, 12);
    // groupher-customize 
    SvgIcon.style.opacity = '0.65'
    SvgIcon.style.height = '13px'
    SvgIcon.style['margin-right'] = '2px'
    this.nodes.button.appendChild(SvgIcon);

    return this.nodes.button;
  }

  /**
   * Wrap range with <b> tag
   *
   * @param {Range} range - range to wrap
   */
  public surround(range: Range): void {
    document.execCommand(this.commandName);
  }

  /**
   * Check selection and set activated state to button if there are <b> tag
   *
   * @param {Selection} selection - selection to check
   *
   * @returns {boolean}
   */
  public checkState(selection: Selection): boolean {
    const isActive = document.queryCommandState(this.commandName);

    this.nodes.button.classList.toggle(this.CSS.buttonActive, isActive);

    return isActive;
  }

  /**
   * Set a shortcut
   *
   * @returns {boolean}
   */
  public get shortcut(): string {
    // groupher-customize
    return 'CMD+SHIFT+B';
  }
}
