import Button from '@sceneui/button';
import Popover, { Position } from '@sceneui/popover';
export default function ExamplePopover() {
  return (
    <div>
      <Popover
        position={Position.BottomCenter}
        content={({ hide }) => <div onClick={hide}>测试一下下而已</div>}
      >
        <Button>显示</Button>
      </Popover>
    </div>
  );
}
