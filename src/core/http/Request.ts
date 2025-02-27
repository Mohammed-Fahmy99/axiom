import { IncomingMessage } from 'node:http';
import Application from '@/core/Application';
import { Jsonable } from '@/types/Jsonable';
import { stringify } from '@/utils/helpers/stringify';

export class Request extends IncomingMessage implements Jsonable {
  /**
   * The `app` property is used to store an instance of the`Application` class,
   * which represents the application being served by the HTTP server.
   *
   * @var Application
   *
   */
  public app: Application;

  static locals: any = {};
  public get locals(): any {
    return Request.locals;
  }
  public set locals(value: any) {
    Request.locals = { ...Request.locals, value };
  }

  static params: any = {};
  public get params(): any {
    return Request.params;
  }
  public set params(value: any) {
    Request.params = value;
  }

  /**
   * Converts The request to a JSON string representation with optional
   * indentation.
   *
   * @param [spaces=0] - The number of spaces to use for indentation when
   * converting the object to JSON. By default, it is set to 0, which means no
   * indentation will be used.
   * @returns A string representation of the object.
   *
   * @example
   *```js
   *Router.get('/request', ({ request }: RouteActionParameters) =>{
   *    return request.toJson(),
   *});
   *```
   *
   */
  toJson(spaces: number = 0): string {
    return stringify(this, spaces);
  }
}
