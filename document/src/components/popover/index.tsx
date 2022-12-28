import Button from '@sceneui/button';
import Popover, { Position } from '@sceneui/popover';
export default function ExamplePopover() {
  return (
    <div>
      <Popover
        position={Position.TopCenter}
        content={({ hide }) => (
          <div
            style={{
              width: '200px',
            }}
            onClick={hide}
          >
            测试一下下而已,测试一下下而已测试一下下而已测试一下下而已测试一下下而已
          </div>
        )}
      >
        <Button>显示</Button>
      </Popover>
    </div>
  );
}
