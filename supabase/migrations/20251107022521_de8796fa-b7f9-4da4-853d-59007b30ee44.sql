-- Create energy_logs table to track user energy levels
CREATE TABLE public.energy_logs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  energy_level TEXT NOT NULL CHECK (energy_level IN ('high', 'medium', 'low')),
  logged_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  notes TEXT
);

-- Enable Row Level Security
ALTER TABLE public.energy_logs ENABLE ROW LEVEL SECURITY;

-- Create policies for energy_logs
CREATE POLICY "Users can view their own energy logs" 
ON public.energy_logs 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own energy logs" 
ON public.energy_logs 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own energy logs" 
ON public.energy_logs 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own energy logs" 
ON public.energy_logs 
FOR DELETE 
USING (auth.uid() = user_id);

-- Create index for better query performance
CREATE INDEX idx_energy_logs_user_id ON public.energy_logs(user_id, logged_at DESC);

-- Create tasks table
CREATE TABLE public.tasks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  energy_level TEXT NOT NULL CHECK (energy_level IN ('high', 'medium', 'low')),
  estimated_time TEXT NOT NULL,
  category TEXT NOT NULL,
  completed BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.tasks ENABLE ROW LEVEL SECURITY;

-- Create policies for tasks
CREATE POLICY "Users can view their own tasks" 
ON public.tasks 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own tasks" 
ON public.tasks 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own tasks" 
ON public.tasks 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own tasks" 
ON public.tasks 
FOR DELETE 
USING (auth.uid() = user_id);

-- Create index for better query performance
CREATE INDEX idx_tasks_user_id ON public.tasks(user_id, created_at DESC);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_tasks_updated_at
BEFORE UPDATE ON public.tasks
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();