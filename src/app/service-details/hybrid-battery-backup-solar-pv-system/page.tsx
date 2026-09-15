import ServiceDetails from '@/components/service-details';
import Wrapper from '@/layouts/Wrapper';
import service_data from '@/data/ServiceData';
import { notFound } from 'next/navigation';

const HybridBatteryBackupPage = () => {
  const service = service_data.find((item) => item.slug === 'hybrid-battery-backup-solar-pv-system');

  if (!service) {
    notFound();
  }

  return (
    <Wrapper>
      <ServiceDetails service={service} />
    </Wrapper>
  );
};

export default HybridBatteryBackupPage;
