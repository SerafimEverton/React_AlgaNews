import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';
import Info from '../../App/Components/Info/Info';

interface InfoProps {
  title: string
  description: string
}

export default function InfoButton (props: InfoProps) {
    setTimeout(() => {
        confirmAlert({
          overlayClassName: 'info-overlay',
          customUI: () => {
            return (
              <Info
                title={props.title}
                description={props.description}
              />
            );
          }
        });
      }, 0)
    }