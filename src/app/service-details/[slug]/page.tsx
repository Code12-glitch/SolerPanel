import ServiceDetails from '@/components/service-details';
import Wrapper from '@/layouts/Wrapper';
import service_data from '@/data/ServiceData';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return service_data.map((item) => ({ slug: item.slug }));
}

const ServiceDetailsPage = ({ params }: { params: { slug: string } }) => {
  const service = service_data.find((item) => item.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <Wrapper>
      <ServiceDetails service={service} />
    </Wrapper>
  );
};

export default ServiceDetailsPage;
